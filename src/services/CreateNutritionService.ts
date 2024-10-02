import { DataProps } from "../controllers/CreateNutritionController"
import { GoogleGenerativeAI } from "@google/generative-ai"
class CreateNutritionService {
    async execute({ name, weight, height, age, gender, objective, level }: DataProps){  

        try {
            const genAI = new GoogleGenerativeAI("")

        }catch(err) {
            console.error("Erro JSON: ", err)
            throw new Error("Ocorreu um erro ao gerar a dieta.")
        }        
        
    }
}

export { CreateNutritionService }