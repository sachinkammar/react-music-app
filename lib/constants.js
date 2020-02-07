//Constants
function define(name, value){
	Object.defineProperty(exports, name, {
		value : value,
		enumerable : true,
	})
}
define("DB", "platifi-enterprise")
define("ZERO", 0)
define("ONE", 1)
define("FIVE", 5)
define("TEN", 10)
define("THIRTY", 30)
define("TWO_HUNDRED", 200)
define("TWO_HUNDRED_AND_ONE", 201)
define("FOUR_HUNDRED", 400)
define("FIVE_HUNDRED", 500)
define("FOURNOTFOUR", 404)
define("FOURNOTTHREE", 403)
define("FOURNOTONE", 401)
define("THREE_THOUSAND", 3000)
define("TRUE", true)
define("FALSE", false)
define("STRING", String)
define("NUMBER",Number)
define("ARRAY",Array)
define("DATE",Date)
define("PUBLIC", "public")
define("PRODUCTION", "production")
define("DEVELOPMENT", "development")
define("INVALID_CREDENTIALS","Authentication Failed! Invalid credentials")
define("INVALID_USERNAME","Authentication Failed! Invalid username")
define("BOTH_PASSWORD_REQUIRED",'requires both existing and new password to update')