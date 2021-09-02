// reading data from database
// .find and .findById
//Find 
/**
 * Read all data from collection
 *  Read some data based on some collection
 *      Query
 */

//FindById
/**
 * Read a particular data
 */

//updating data in database
//findOneAndUpdate
/**
 * Model.findOneAndUpdate({name:"ace"},{age: 40}, function(err,response){})
 * the above updates only the fist one it finds
 */
//update
/**
 * This method updates all that it finds not only the first result
 * Model.update({},{},function(err,response))
 */
//findByIdAndUpdate
/**
 * finds the results having a specific id then updates them based on the objects passed
 * Model.findByIdAndUpdate("id",{name:"Kelvin"})
 */

//In all these we create a variable and store the query inside (req.query.what_you_want)

//deleting data
/**
 * Remove
 * findByIdAndRemove
 * deleteOne
 * findByIdAndDelete
 * findOneAndRemove
 */

/**To pass params you place a question mark after the routes with the property you want then equals to and the specific data */
