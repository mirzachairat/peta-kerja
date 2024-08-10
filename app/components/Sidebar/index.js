'use client'

import * as React from 'react'
import {List,ListItem,Icon,Image, Drawer, } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { LuLayoutPanelLeft,LuFileCog,LuUsers } from "react-icons/lu";
import {TfiSettings} from "react-icons/tfi";



const Sidebar = () =>{
    const listData = [
        {
            icon:LuLayoutPanelLeft,
            title:'Atur Tampilan',
            link: '/aturtampilan' 
        },
        {
            icon:LuFileCog,
            title:'Kelola Data',
            link: '/keloladata'
        },
        {
            icon:TfiSettings,
            title:'Kofigurasi',
            link:'/konfigurasi'
        },
        {
            icon:LuUsers,
            title:'Pengguna',
            link: '/pengguna'
        },
    ]
    return(
        <>  
             <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
                        <List className="space-y-2">
                            {listData.map((card, index) => (
                                <ListItem display="flex" key={index}>
                                    <Icon as={card.icon} color='green.500' marginRight="8px"/>
                                    <Link href={card.link}>{card.title}</Link> 
                                </ListItem>
                            ))}
                        </List>
                </aside>                     
        </>
    )
}

export default Sidebar