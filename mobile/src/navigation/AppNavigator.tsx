import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { ComponentProps } from 'react';

import DashboardScreen from '../screens/DashboardScreen';
import DiaryScreen from '../screens/DiaryScreen';
import AssistantScreen from '../screens/AssistantScreen';
import RecipesScreen from '../screens/RecipesScreen';
import ProfileScreen from '../screens/ProfileScreen';

import type { RootTabParamList } from '../types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

type IconName = ComponentProps<typeof Ionicons>['name'];

const tabIcons: Record<
  keyof RootTabParamList,
  { active: IconName; inactive: IconName }
> = {
  Dashboard: {
    active: 'home',
    inactive: 'home-outline',
  },
  Diary: {
    active: 'calendar',
    inactive: 'calendar-outline',
  },
  Assistant: {
    active: 'chatbubble',
    inactive: 'chatbubble-outline',
  },
  Recipes: {
    active: 'book',
    inactive: 'book-outline',
  },
  Profile: {
    active: 'person',
    inactive: 'person-outline',
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icon = tabIcons[route.name];

            return (
              <Ionicons
                name={focused ? icon.active : icon.inactive}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: '#171717',
          tabBarInactiveTintColor: '#737373',
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
        />

        <Tab.Screen
          name="Diary"
          component={DiaryScreen}
        />

        <Tab.Screen
          name="Assistant"
          component={AssistantScreen}
        />

        <Tab.Screen
          name="Recipes"
          component={RecipesScreen}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
