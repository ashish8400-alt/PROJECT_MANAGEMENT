import { ApiResponse } from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";

/** 

const healthCheck = async (req,  res, next)=> {
  try {

    const user = await getUserFromDB()
    
    res.status(200)
    .json(new ApiResponse(200,  {message: "Server is runing"}))
  } catch (error) {
     next(err)
  }
}

*/

// Niche hai kaise dusare tarike se try aur catch chala sakte hai

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(
    new ApiResponse(200, {
      message: "Server is Running",
    }),
  );
});

export { healthCheck };
