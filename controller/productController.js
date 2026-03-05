 const connection = require ('../config/db');

//get all users
exports.getAllProducts = (req,res)=>{
    connection.query('SELECT * FROM product_info', (err,rows,fields) => {
        if (err) throw err;
            res.json(rows);
    });
};


// //Search a user by Id
// exports.getUserById=(req,res)=> {
//     const id=req.params.id;
//     connection.query('SELECT * FROM product_info WHERE id=?', [id], (err, rows,fields)=> {
//         if(err) throw err;
//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json
//             ({message:'User not found'});
//     });
// }


//Search a user by gender
// exports.getUserByGender=(req,res)=> {
//     const gender=req.params.gender;
//     connection.query('SELECT * FROM userdata WHERE gender=?', [gender], (err, rows,fields)=> {
//         if(err) throw err;
//         if(rows.length>0)
//             res.json(rows);
//         else
//             res.status(404).json
//             ({message:'User not found'});
//     });
// }


//Create a new User
//crud - create
exports.addProduct=(req,res)=> {
    const {item_name, unit_price, qty, supp} = req.body;
    connection.query('INSERT INTO product_info (itemName, unitPrice, quantity, supplier) VALUES (?,?,?,?)',[item_name, unit_price, qty, supp], (err,result)=> {
        if(err) throw err;
        res.json({message:'Product Added Successfully', userId:
        result.insertId});
    })
}


//update
//crud -update
// exports.updateUser=(req,res)=>{
//     const {id, fname, lname, email, gender, course} = req.body;
//     connection.query('UPDATE  userdata SET first_name=?, last_name=?, email=?, gender=? WHERE id=?', [fname, lname, email, gender,id, course], (err,result) => {
//         if (err) throw err;
//         if(result.affectedRows>0)
//             res.json({message:'User Update Succesfully'});
//         else
//             res.status(404).json({message:'User not found'});
//     });
// };


//delete
//crud-delete

// exports.deleteUser=(req,res)=>{
//     const {id}  = req.body;
//     connection.query('DELETE FROM userdata WHERE id=?', [id], (err,result) => {
//         if (err) throw err;
//         if(result.affectedRows>0)
//             res.json({message:'User Deleted Succesfully'});
//         else
//             res.status(404).json({message:'User not found'});
//     });

// };
