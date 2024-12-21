import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Title, Paragraph, Card, Appbar, Button, Surface, useTheme } from 'react-native-paper';
import Colors from '../assets/colors/colors';

const ProfileScreen = () => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'JD',
    activities: [
      { id: 1, title: 'Joined a new project', date: '2024-12-01' },
      { id: 2, title: 'Completed a task', date: '2024-12-05' },
      { id: 3, title: 'Updated profile picture', date: '2024-12-10' },
      { id: 4, title: 'Attended a team meeting', date: '2024-12-15' },
    ],
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Profile" />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        <Surface style={styles.profileSection} elevation={2}>
          <Avatar.Text size={80} label={user.avatar} style={styles.avatar} />
          <Title style={styles.userName}>{user.name}</Title>
          <Paragraph style={styles.userEmail}>{user.email}</Paragraph>
          <Button mode="contained" style={styles.editButton}>Edit Profile</Button>
        </Surface>

        <Title style={styles.activitiesTitle}>Recent Activities</Title>
        {user.activities.map(activity => (
          <Card key={activity.id} style={styles.activityCard}>
            <Card.Content>
              <Title style={styles.activityTitle}>{activity.title}</Title>
              <Paragraph style={styles.activityDate}>{activity.date}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  appbar: {
    elevation: 4,
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    padding: 20,
    alignItems: 'center',
    margin: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  avatar: {
    backgroundColor: Colors.primary,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.text,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
  },
  activitiesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  activityCard: {
    margin: 14,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activityDate: {
    fontSize: 14,
    color: Colors.text,
  },
});

export default ProfileScreen;