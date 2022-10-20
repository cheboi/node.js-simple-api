
module.exports = {
    components:{
        schemas:{
            // id modals 
            id:{
                type: "string",
                description: "Modal id",
                example: "12T",
            },
            todo:{
                type: "object",
                properties: {
                    id:{
                        type:"string",
                        description: "todo id",
                        example: "1123ty",
                    },
                    title:{
                        type:"string",
                        description: "title of the todo task",
                        example: "Document javascript with JsDoc",
                    },
                    completed: {
                        type:"boolean",
                        description: "Description of the task if completed true or false",
                        example: false,
                    }
                }
            },
            TodoInput: {
                type: "object",
                properties: {
                    id: {
                        type:"string",
                        description:"description of the id",
                        example: "tyrhjrf",
                    },
                    title: {
                        type:"string", 
                        description:"title of the item", 
                        example:"I will do node js tonight",     
                    },
                    completed: {
                        type:"boolean",
                        description:"is the item completed successfully", 
                        example:true,
                    }
                }
            },
            Error:{
                type:"object",
                properties:{
                    message: {
                        type:"string",
                        description: "Error message",
                        example:"Not Found",
                    },
                    internal_code: {
                        type:"string",
                        description: "Internal Error",
                        example:"Invalid parameter",
                    }
                }
            }
        }
    }
    
}