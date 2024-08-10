'use client'
import Sidebar from '@app/components/Sidebar';
import {ChakraProvider } from '@chakra-ui/react';
import {Flex} from '@chakra-ui/react'
import Head from 'next/head';


const Layoutadmin =({children})=>{
    return (
        <ChakraProvider>
          <Head>
                <meta charset="utf-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
          </Head>
          <body className="h-screen overflow-hidden flex items-center justify-center"/>
          <body className="bg-gray-100">
                <Flex>
                    <Sidebar />
                    <main className="container mx-auto">
                        {children}
                    </main>
                </Flex>
           </body>     
        </ChakraProvider>
    )
}

export default Layoutadmin