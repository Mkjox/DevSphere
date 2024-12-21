import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../assets/colors/colors';

const CustomBottomTabBar = (props: { state: any; descriptors: any; navigation: any; }) => {
  const { state, descriptors, navigation } = props;

  return (
    <View style={styles.container}>
      {state.routes.map((route: { key: any; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; }, index: React.Key | null | undefined) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = route.name === 'Home' ? 'home' : route.name === 'About' ? 'information' : 'account';

        return (
          <TouchableOpacity key={index} onPress={onPress} style={styles.tabButton}>
            <MaterialCommunityIcons name={iconName} size={28} color={isFocused ? Colors.active : Colors.primary} />
            <Text style={{ color: isFocused ? Colors.active : Colors.primary, fontSize: 12 }}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
});

export default CustomBottomTabBar;
