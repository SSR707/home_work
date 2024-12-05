import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(
    'postgres://postgres:saman77071!@localhost:5432/orm',
)

const connection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}
connection()
export default sequelize
