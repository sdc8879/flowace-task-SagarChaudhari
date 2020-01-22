var dbconnect = require('../db');

module.exports.login = function (req, res) {
    console.log('inside login function', req.body);

    let query = "SELECT mst_user.id,mst_user.user_name,mst_user.user_email," +
        " mst_user_type.user_type " +
        " FROM mst_user INNER JOIN mst_user_type " +
        " ON mst_user.user_type=mst_user_type.id " +
        " WHERE mst_user.user_email=? " +
        " AND mst_user.user_password=? "

    dbconnect.executeQueryParam(query, [req.body.params.email, req.body.params.password]).then((result) => {
        console.log('result-----------', result)
        res.json(
            {
                "id": result[0].id,
                "name": result[0].user_name,
                "email": result[0].user_email,
                "type": result[0].user_type
            }
        )
    })
}

module.exports.createItems = function (req, res) {

}

module.exports.listItems = function (req, res) {

}

module.exports.getProductList = function (req, res) {

    let query = "SELECT * FROM mst_items WHERE item_quantity <>0"
    dbconnect.executeQuery(query).then((result) => {
        console.log("getProductList------------", result);
        res.send(result)
    })

}

module.exports.orderRequested = function (io, data) {
    io.emit("noOfOrders", data)
}

module.exports.setOrderStatus = function (io, data) {


    let sqlQuery = "";
    sqlQuery = `Insert into mst_order (order_item_id,order_item_name,order_customer_id,order_status)
    values(?,?,?,?)`;

    let values = [];
    values.push(data.item_id);
    values.push(data.item_name);
    values.push(data.customer_id);
    values.push(data.item_order_status);

    dbconnect.executeQueryParam(sqlQuery, values).then((result) => {


        if (result.insertId > 0) {
            //After Entry into mst_order now update mst_item table to update items quantity

            if (data.item_order_status == 2) {
                let sqlQuery = "update mst_items SET item_quantity=item_quantity-1 where item_quantity>0 AND item_id=?";

                dbconnect.executeQueryParam(sqlQuery, [data.item_id]).then((res) => {

                    if (result.affectedRows > 0) {

                        let obj = {}
                        obj = {
                            "item_id": data.item_id,
                            "item_order_status": data.item_order_status
                        }
                        io.emit("getOrderStatus", obj);
                    }

                });
            } else {

                let obj = {};
                obj = {
                    "item_id": data.item_id,
                    "item_order_status": data.item_order_status
                }

                io.emit("getOrderStatus", obj);
            }

        }
    })
}


module.exports.confirmOrder = function (io, data) {

    console.log('io=====', io)
    console.log('data=====', data)
    io.emit('orderstatus', { "value": true })
}



