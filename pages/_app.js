

function GlobalStyle() {

  return (

    <style global jsx>
      {`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
 }

`}
    </style>

  );

}

//Essa é a função importante
export default function MyApp({ Component, pageProps }) {

  return (
    <>

      <Component {...pageProps} />
      <GlobalStyle />

    </>

  );

  /*Por causa desse código tuda função que estiver nesse arquivo e for colocada 
  nessa função será carregado em todas as páginas*/
}