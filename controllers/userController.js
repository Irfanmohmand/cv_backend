import User from "../models/usersModel.js";

export const userDetail = async (req, res) => {

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(402).json({
      success: false,
      message: "All fields are required"
    })
  }

  try {

    const user = await User.create({
      name,
      email,
      message
    });

    return res.status(200).json({
      success: true,
      message: "User submmitted the data",
      user
    });


  } catch (error) {
    console.log("Error in userDetails", error.message);

  }

};

