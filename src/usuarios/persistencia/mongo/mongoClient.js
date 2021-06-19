import mongodb from "mongodb"

function crearMongoClient(cnxStr) {
    const client = new mongodb.MongoClient(cnxStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  
    return {
      connect: async () => {
        await client.connect()
        const db = client.db('TP2 Grupo3 Final')
        return db
      },
      close: async () => {
        await client.close()
      }
    }
  }
  
  export { crearMongoClient }