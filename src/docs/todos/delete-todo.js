module.exports = {
    delete:{
        tags:["Todo CRUD operations"],
        description: "Delete a todo",
        operationId: "deleteTodo",
        parameters: [
            {
                name: "id",
                in: "path",
                shema: {
                    $ref: "#/components/schemas/id",
                },
                required: true,
                description: "Deleting a done todo",
            },
        ],

        responses:{
            200: {
                description: "Todo deleted successfully",
            },
            400: {
                description: "Todo not found",
            },
            500: {
                description: "Server Error",
            },
        },
    },
};