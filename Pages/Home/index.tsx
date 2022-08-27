import { useEffect, useState } from 'react'
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Header } from '../../Components/Header'

import {
  Container,
  Content,
  FilterForm,
  TableContent

} from './style'
import { UserData } from '../../Types';
import { ModalInfo } from '../../Components/ModalInfo';



export function Home() {
  /* esse comando abraixo é para amarzenar as informações obtidas pela api */
  const [dataFetching, setDataFetching] = useState<UserData[]>([])
  const [dataFetchingBackup, setDataFetchingBackup] = useState<UserData[]>([])
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [isModalInfoOpen, setIsModalInfoOpen] = useState(false);
  const [dataUser, setDataUser] = useState<UserData>();
  const [searchCountry, setSearchCountry] = useState('');

  function handleOpenModalInfo(userSelected: UserData) {
    setDataUser(userSelected);
    setIsModalInfoOpen(true);

  }


  function handleCloseModalInfo(userSelected: UserData) {

    setIsModalInfoOpen(false);

  }
  // o comando abaixo não foi evitado, pelo fato dele consumir uma appi e amdomiza os alunos
  useEffect(() => {
    /* esse comandoa seguir foi feito para testar a chamada no console do navegador console.log('Chamou')*/
    /* agora abaixo vamos chamar nossa api */

    axios.get('https://randomuser.me/api/', {
      params: {
        results: 5

      }

    })
      .then(response => {

        /* usado para teste console.log('response')*/
        setDataFetching(response.data.results);
        setDataFetchingBackup(response.data.results);
      })
      .catch(error => {
        // mais um comando substituido com a criação do const console.log('error')
        setError(error);

      })

      .finally(() => {

        setIsFetching(false);

      })

  }, []);

  // o comando useEffect vai ser executado, sempre que o usuário fazer a pesquisa no campo search 
  /*  useEffect(() => {

     if(search.length !== 0){
            
      const filter = dataFetching.filter(e =>
        
        e.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 || e.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0
        
        );
       // vai mostrar só os renderizados que estão sendo filtrados
  setDataFetching(filter);
          
     }else {

      setDataFetching(dataFetchingBackup);

     }


    },[search]);

  useEffect(() => {

  if(searchCountry !== ''){

   const filterCountry = dataFetching.filter(a=> a.location.country.toUpperCase() == searchCountry.toUpperCase())
   setDataFetching(filterCountry);


  }else{

    setDataFetching(dataFetchingBackup);
  }

  },[searchCountry]) */ /* Ele eliminou toda essa linha acima para evitar usar um useEffect e 
  ter problemas com renderização. Ele substituiu pelo comando abaixo*/


  const filteredCountry = searchCountry.length > 0
    ? dataFetching.filter(a => a.location.country.toUpperCase().includes(searchCountry.toUpperCase()))
    : [];

  const filteredName = search.length > 0
    ? dataFetching.filter(a => (a.name.first.toUpperCase() || a.name.last.toUpperCase()).includes(search.toUpperCase()))
    : [];

  const actuallyFilter = search.length > 0 ? filteredName : filteredCountry;

  return (
    <Container>
      <Header />
      <Content>
        <h1>Lista dos Alunos do Curso</h1>
        {

          isFetching ? (

            /*  Podia ser assim,mas embaixo instalamos uma biblioteca com recurso melhor  
               <div>Carregando....</div> */
            <ReactLoading type="spin" color="#FFF" />


          ) : (


            <>

              <FilterForm>
                <div >
                  <label htmlFor="nome"> Pesquisar </label>
                  <input
                    type="text"
                    id="nome"
                    placeholder='Nome do Aluno'
                    onChange={(e) => setSearch(e.target.value)}

                  />
                </div>
                  <div >
                  <label htmlFor="nacionalidade"> Nacionalidade </label>
                  
                  
                  <select
                    name="nacionalidade"
                    id="nacionalidade"
                    onChange={(e) => setSearchCountry(e.target.value)}
                    value={searchCountry}

                  >

                    <option value="">Todas</option>

                    {
                      /* dataFetchingBackup resolveu o problama da busca,mas paa resolver o problema da renderização,
                      ele tirou. */

                      dataFetching.map((e, index) => {

                        return (

                          <option key={index} value={e.location.country} > {e.location.country}</option>

                        )

                      })

                    }

                  </select>
                </div>

                <div></div>

              </FilterForm>

              <TableContent>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Sexo</th>
                    <th>Nacionalidade</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {

                    searchCountry.length > 0 || search.length > 0 ? (
                      actuallyFilter.map((e, index) => {
                        return (
                          <tr key={index}>

                            <td>{`${e.name.first} ${e.name.last}`} </td>
                            <td>{e.gender} </td>
                            <td>{e.location.country} </td>
                            <td>
                              <button onClick={() => handleOpenModalInfo(e)} >Visualizar </button>
                            </td>
                          </tr>
                        )
                      })

                    ) : (
                      dataFetching.map((e, index) => {
                        return (
                          <tr key={index}>

                            <td>{`${e.name.first} ${e.name.last}`} </td>
                            <td>{e.gender} </td>
                            <td>{e.location.country} </td>
                            <td>
                              <button onClick={() => handleOpenModalInfo(e)} >Visualizar </button>
                            </td>
                          </tr>
                        )
                      })

                    )

                  }


                </tbody>
              </TableContent>

            </>
          )

        }
      </Content>

      <ModalInfo

        isOpen={isModalInfoOpen}
        onRequestClose={handleCloseModalInfo}
        userSelected={dataUser}

      />

    </Container>

  )
}

