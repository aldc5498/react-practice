import React from 'react';
import {IconType} from 'react-icons';
import {VStack, Box, Text} from '@chakra-ui/react';
import {ChevronDownIcon , ChevronRightIcon} from '@chakra-ui/icons';


interface MenuItem{
    id: number;
    title: string;
    icon: string;
    children: MenuItem[];
}

interface SidebarProps{
    data: MenuItem[];
}

const SidebarItem: React.FC<{item: MenuItem}> = ({item}) => {

    const[isOpen, setIsOpen] = React.useState(false);

    const handleToggle = () => {
        setIsOpen((prevOpen) => !prevOpen);
    };

    return (
        <VStack align="start" spacing={1} pl={4}>
            <Box
            display="flex"
            alignItems="center"
            fontWeight={isOpen ? 'bold': 'normal'}
            cursor ={item.children.length > 0 ? 'pointer':'default'}
            onClick={item.children.length> 0 ? handleToggle : undefined } 
            >
                {item.children.length > 0 && (
                    <Box pr={2}>
                        {isOpen ? <ChevronDownIcon /> : <ChevronRightIcon/>}
                    </Box>

                )}
                <item.icon />
                <Text ml={2}>{item.title}</Text>
            </Box>
            {isOpen &&
            item.children.map((child) => (
                <SidebarItem key={child.id} item={child}/>
            ))}
            </VStack>
    );
};

const Sidebar: React.FC<SidebarProps> = ({data}) => {
    return(
<VStack align="start" spacing={4} >
    {data.map((item) => (
        <SidebarItem key={item.id} item={item}/>
    ))}
</VStack>
    );
};

export default Sidebar;