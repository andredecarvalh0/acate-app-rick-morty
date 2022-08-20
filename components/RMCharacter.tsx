import {
    View,
    Text,
    Pressable
} from 'react-native';

import { 
    useEffect, 
    useState 
} from 'react';

import Api from '../services/Api'

function RMCharacter() {

    const [character, setCharacter] = useState();

    useEffect(() =>{
        Api.get('character').then(
            res => console.log(res.data.results)
        )
    }, [])

    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>Texto qualquer...</Text>
            <Pressable
                // onPress={() => setCount(!count)}
            >
                <Text>
                    Click me
                </Text>
            </Pressable>
        </View>
    )
}

export default RMCharacter