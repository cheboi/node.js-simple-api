module.exports = {
    // operation's method
    get: {
      tags: ["Todo CRUD operations"], 
      description: "Get a todo", 
      operationId: "getTodo", 
      parameters: [
        // expected params.
        {
          name: "id", 
          in: "path", 
          schema: {
            $ref: "#/components/schemas/id", 
          },
          required: true, 
          description: "A single todo id", 
        },
      ],
      // expected responses
      responses: {
        // response code
        200: {
          description: "Todo is obtained", 
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Todo", 
              },
            },
          },
        },
        // response code
        404: {
          description: "Todo is not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error", 
              },
            },
          },
        },
      },
    },
  };