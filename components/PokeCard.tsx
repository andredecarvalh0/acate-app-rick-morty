import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Pressable
} from 'react-native'

function PokeCard() {

    const [count, setCount] = useState(true)

    useEffect(() =>{
        console.log('Componente iniciado')
    }, [count])

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Texto qualquer...</Text>
            <Pressable
                onPress={() => setCount(!count)}
            >
                <Text>
                    Click me
                </Text>
            </Pressable>
        </View>
    )
}

export default PokeCard