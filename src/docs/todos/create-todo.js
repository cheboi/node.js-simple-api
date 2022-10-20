
module.exports = {
    post:{
        tags: ["Todo CRUD operations"], // operation's tag
        description: "Create todo", // short desc
        operationId: "createTodo", // unique operation id
        parameters: [],

        requestBody:{
            content:{
                "application/json":{
                    schema: {
                        $ref: "#/components/schemas/TodoInput",
                    },
                },
            },
        },
        responses: {
            201: {
                description: "Todo created successfully",
            },
            500: {
                description: "Server error",
            }
        }
    }
}