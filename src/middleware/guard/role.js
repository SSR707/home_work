
export const roleGuard = (...roles) => {
    return async (req, res, next) => {
        try {
            const { role } = req.user

            if (!roles.includes(role)) {
                console.log("access deny!")
            }

            next()
        } catch (e) {
            next(e)
        }
    }
}
