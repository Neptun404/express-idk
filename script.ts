import db from './prisma'

async function main() {

    const response = await db.user.create({
        data: {
            email: 's7ZkF@example.com',
            name: 'test',
            posts: {
                create: {
                    title: 'Hello World',
                    content: 'This is my first post',
                    published: true
                }
            }
        }
    })

    db.user.delete({
        where: {
            id: 1
        }
    })

    console.log(response);

}

main()
    .then(async () => {
        await db.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await db.$disconnect()
        process.exit(1)
    })