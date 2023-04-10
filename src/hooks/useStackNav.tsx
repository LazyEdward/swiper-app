import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParam } from 'src/type/StackParam';

export const useStackNav = useNavigation<NativeStackNavigationProp<StackParam>>