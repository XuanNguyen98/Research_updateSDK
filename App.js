import * as React from 'react';
import * as Common from './styles/common'
import * as Colors from './styles/colors'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from './components/TabBarIcon';
import TabBarIconWithBadge from "./components/TabBarIconWithBadge";


function ClassStack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lớp học</Text>
    </View>
  );
}
function ScoreStack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Điểm thi</Text>
    </View>
  );
}

function ScheduleStack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Lịch học</Text>
    </View>
  );
}

function NotificationStack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Thông báo</Text>
    </View>
  );
}

function MoreStack() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cá nhân</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Lớp học"
      tabBarOptions={{
        activeTintColor: Common.Colors.NaviGray,
        inactiveTintColor: Common.Colors.NaviGray,
      }}>
      <Tab.Screen name="Lớp học" component={ClassStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-book`
                  : 'md-book'
              }
            />
          ),
        }}
      />
      <Tab.Screen name="Điểm thi" component={ScoreStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-newspaper`
                  : 'md-newspaper'
              }
            />
          ),
        }}
      />
      <Tab.Screen name="Lịch học" component={ScheduleStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-calendar`
                  : 'md-calendar'
              }
            />
          ),
        }}
      />
      <Tab.Screen name="Thông báo" component={NotificationStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              IsTurnBadgeOn={true}
              title="notification"
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-notifications`
                  : 'md-notifications'
              }
            />
          ),
        }} />
      <Tab.Screen name="Cá nhân" component={MoreStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              IsTurnBadgeOn={true}
              title="account"
              focused={focused}
              name={
                Platform.OS === 'ios'
                  ? `ios-person`
                  : 'md-person'
              }
            />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};