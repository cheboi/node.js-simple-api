module.exports = {
  get:{
    tags:["Todo Crud operations"],
    description:"Get Todos",
    operationId:"getTodos",

    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema: {
                      $ref: "#/components/schemas/Todo",
                      },
                }
            }
        }
    }
  }
}