const { client } = require("./dbConfig");

// Find a Document
// ====================
const findSingleDoc=async()=> {
    try {
        const database = client.db("learnmongo");
        const users = database.collection("users");
        const doc = { name: "Max" };
        // const options = {       
        //     projection: { _id: 1, name: 1,hobbies:1  }
        // };
        const user = await users.findOne(doc);
        // const user = await users.findOne(query, options);
        // console.log("Inside user data=======>",user.hobbies[0].frequency)
        console.log(`A document was inserted with the _id: ${user.insertedId}`);
        // console.log("Output of find a doc=====>",user);
    } catch (error) {
        console.log(error);

    }finally {
        await client.close();
    }
}
findSingleDoc()