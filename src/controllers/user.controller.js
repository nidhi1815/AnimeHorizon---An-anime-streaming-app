import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async ( req , res ) => {
    //console.log("Register endpoint hit ✅");
    res.status(200).json({
        message : "ok"
    })
})

export { registerUser}