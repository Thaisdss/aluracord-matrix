import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router'
import appConfig from './config.json';
import React, { useState } from 'react';
import { ButtonSendSticker } from './buttonSendSticker';

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


function Titulo(props) {
  const Tag = props.tag || 'h1';

  return (
    < >

      <Tag>{props.children}</Tag>

      <style jsx>
        {`
    ${Tag}{
        color:${appConfig.theme.colors.neutrals['000']};
        font-size: 40px;
        font-weith:600;
    }
    `}
      </style>

    </ >

  );

}

/*function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Titulo Tag="h1">Boas vindas de volta!</Titulo>
      <h2>Discord - Alura Matrix</h2>
    </div>
  )
}*/

//export default HomePage

export default function PaginaInicial() {
  //const username = 'Thaisdss';
  const [username, setUsername] = useState('Thaisdss');
  const roteamento = useRouter();


  return (

    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              console.log('Alguém submeteu o form')
              roteamento.push(`/chat?username=${username}`);
              //window.location.href = '/chat';
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            {/*<input
              type="text"
              value={username}
              onChange={function (event) {
                //console.log('usuário digitou', event.target.value)
                //Onde ta o valor?
                const valor = event.target.value;
                //Trocar o valor da variável
                //Através do React e avise quem precisa
                setUsername(valor);
              }}

            />*/}
            <TextField
              value={username}
              onChange={function (event) {
                /*O onChange sempre recebe uma function, pode ser do modo como está acima ou pode
              ser assim: onChange={() => {}}. Esse parâmetro event da function contem todas as informções
              do evento, ou seja, do que está sendo mudado.
              Esse event também pode ser digitado como: evento ou infosDoEvento*/
                //Onde ta o valor?
                const valor = event.target.value;
                /*Para você acessar o valor do que está sendo mudado basta acessar a tag target dentro do event
                (pois o event vai guardar sempre várias informações sobre aquilo, e dentro do target você pode acessar
                o value que é o valor que está sendo digitado pelo usuário) */
                //Trocar o valor da variável
                //Através do React e avise quem precisa
                setUsername(valor);
              }}
              //Estilização da caixa de texto
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box >
    </>
  );
}