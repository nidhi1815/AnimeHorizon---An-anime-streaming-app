import mongoose , {Schema} from "mongoose";
import bcrypt from "bcypt"
import jsonwebtoken, { JsonWebTokenError } from "jsonwebtoken";
const userSchema = new Schema(
    {
        username :{
            type : String,
            required : true,
            unique: true,
            lowercase : true,
            trim: true,
            index: true
        },
        email:{
            type : String,
            required : true,
            unique: true,
            lowercase : true,
            trim: true,
        },
        fullname:{
            type : String,
            required : true,
            lowercase : true,
            trim: true,
            index: true
        },
        avatar:{
            type: String ,// cloudinary url
            required : true,
        },
        coverImage:{
            type: String ,// cloudinary url
        },
        watchHistory :[
            {
                type: Schema.Type.ObjectID,
                ref: "Video"

            }
        ],
        password:{
            type : String,
            required:[true ,"Password is required"]
        },
        refreshToken:{
            type : String
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre("save" , async function(next){
    if(!this.isModified("password")){
    this.password = bcrypt.hash(this.password ,10)
    next()
    }
})
userSchema.methods.generateAccessToken = async function (password){
    return await bcrypt.compare( password , this.password)
} 
userSchema.methods.isPasswordCorrect =  function (){
    return JsonWebTokenError.sign(
        {
            _id : this.id,
            email: this.email,
            userSchema: this.username,
            fullName : this.fullname

        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
} 
userSchema.methods.generateRefreshToken =  function (){
    return JsonWebTokenError.sign(
        {
            _id : this.id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )
} 

export const User = mongoose.model("User" , userSchema)
