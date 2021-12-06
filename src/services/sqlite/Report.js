import db from './SQLiteDatabse'

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction(tx => {

  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  // tx.executeSql(
  //   "DROP TABLE reports;"
  // )
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS reports (id INTEGER PRIMARY KEY AUTOINCREMENT, laudo TEXT, sincronizado INT, status TEXT);"
  )
})
/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */
//  console.log(db)


const create = (obj) => {

  return new Promise( (resolve, reject) => {
    db.transaction(
      tx => {
        //comando SQL modificável
        tx.executeSql("INSERT INTO reports (laudo,sincronizado) values (?, ?);", [obj.laudo, obj.sincronizado],
        //-----------------------
          (_, {rowsAffected, insertId}) => {
            if(rowsAffected > 0){
              resolve(insertId)
            }
            else
              reject('Error inserting obj: '+JSON.stringify(obj)) // insert falhou
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
          )
      }
    )

  })
}


/**
 * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
 * - Não recebe parâmetros;
 * - Retorna uma Promise:
 *  - O resultado da Promise é uma lista (Array) de objetos;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso não existam registros.
 */

const all =  async() => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM reports;",
        [],
        //-----------------------
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const find = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM reports WHERE id=?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const remove = (id) => {
  return new Promise( (resolve, reject) => {

    db.transaction(
      tx => {
        //comando SQL modificável
        tx.executeSql("DELETE FROM reports WHERE id=?;", [id],
        //-----------------------
          (_, {rows}) => {
          resolve(rows)
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        )
      }
    )

  })
}

const update = (id, obj) => {
  return new Promise( (resolve, reject) => {

    db.transaction(
      tx => {
        //comando SQL modificável
        tx.executeSql("UPDATE reports SET sincronizado=? WHERE id=?;", [obj.sincronizado, id],
        //-----------------------
          (_, {rowsAffected}) => {
            if(rowsAffected > 0)
              resolve(rowsAffected)
            else
              reject('Error updating obj: id='+id) // nenhum registro alterado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
          )
      }
    )

  })
}

export default {
  create,
  all ,
  remove,
  update,
  find
}
