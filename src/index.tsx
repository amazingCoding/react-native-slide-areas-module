import { NativeModules } from 'react-native';

type SlideAreasModuleType = {
  multiply(a: number, b: number): Promise<number>;
};

const { SlideAreasModule } = NativeModules;

export default SlideAreasModule as SlideAreasModuleType;
