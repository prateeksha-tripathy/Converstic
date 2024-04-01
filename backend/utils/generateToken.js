import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: '15d'        // token expiration in 15 days
    });

    // console.log(token);

    res.cookie("jwt",token,{
        maxAge : 15 * 24 * 60 * 60,     // we cant pass the age as days, it should be in milliseconds   
        httpOnly: true,   //prevents XSS attacks ie., cross-site scripting attacks --> cant be accessed by javascript
        sameSite: "strict",    //prevents CSRF attacks ie , cross-site request forgery attacks
        secure : process.env.NODE_ENV !== "development"
    });
};

export default generateTokenAndSetCookie;