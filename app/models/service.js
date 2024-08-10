import { Int32 } from "mongodb";
import mongoose, {Schema} from "mongoose"

const serviceSchema = new Schema(
    {
        cat_layer: String,
        layer_name: String,
        share: String,
        aplikasi: String,
        platform_layer: String,
        layer_type: String,
        analisa_function: String,
        url_cat: String,
        proxy: String,
        option_opacity: String      
    },
    {
        timestamps: false
    }
)

const Service = mongoose.models.Service || mongoose.model("Service", serviceSchema);

export default Service;

