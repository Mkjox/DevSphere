import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Surface, Text, Title, Paragraph, Avatar, Card, Appbar, useTheme, Button } from 'react-native-paper';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from '../assets/colors/colors';

const AboutScreen = () => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;

  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      avatar: 'SJ',
      bio: 'Visionary leader with 15+ years in tech innovation'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Lead Developer',
      avatar: 'MC',
      bio: 'Full-stack expert specializing in React Native'
    },
    {
      id: 3,
      name: 'Emma Williams',
      role: 'UX Designer',
      avatar: 'EW',
      bio: 'Creating beautiful, intuitive user experiences'
    }
  ];

  const stats = [
    { label: 'Team Members', value: '50+', icon: 'account-group' },
    { label: 'Projects', value: '200+', icon: 'rocket-launch' },
    { label: 'Countries', value: '25', icon: 'earth' },
    { label: 'Happy Clients', value: '1000+', icon: 'heart' }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge solutions',
      icon: 'lightbulb-on'
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering outstanding quality',
      icon: 'star'
    },
    {
      title: 'Collaboration',
      description: 'Working together to achieve greatness',
      icon: 'handshake'
    }
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="About Us" />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        <Surface style={styles.missionSection} elevation={2}>
          <Title style={styles.sectionTitle}>Our Mission</Title>
          <Paragraph style={styles.missionText}>
            We're on a mission to transform digital experiences through innovative technology solutions. 
            Our passion for excellence and commitment to cutting-edge development drives everything we do.
          </Paragraph>
        </Surface>

        <View style={styles.valuesContainer}>
          {values.map((value, index) => (
            <Surface key={index} style={styles.valueCard} elevation={2}>
              <MaterialCommunityIcons name={value.icon} size={32} color={Colors.primary} />
              <Title style={styles.valueTitle}>{value.title}</Title>
              <Paragraph style={styles.valueDescription}>{value.description}</Paragraph>
            </Surface>
          ))}
        </View>

        <View style={styles.statsContainer}>
          {stats.map((stat, index) => (
            <Surface key={index} style={styles.statCard} elevation={2}>
              <MaterialCommunityIcons name={stat.icon} size={32} color={Colors.primary} style={styles.statIcon} />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </Surface>
          ))}
        </View>

        <Title style={styles.teamTitle}>Meet Our Team</Title>
        {teamMembers.map((member) => (
          <Card key={member.id} style={styles.teamCard}>
            <Card.Content style={styles.teamMemberContent}>
              <Avatar.Text size={60} label={member.avatar} style={styles.avatar} />
              <View style={styles.memberInfo}>
                <Title style={styles.memberName}>{member.name}</Title>
                <Text style={styles.memberRole}>{member.role}</Text>
                <Paragraph style={styles.memberBio}>{member.bio}</Paragraph>
              </View>
            </Card.Content>
          </Card>
        ))}

        <Surface style={styles.contactSection} elevation={2}>
          <Title style={styles.sectionTitle}>Get in Touch</Title>
          <Paragraph style={styles.contactText}>
            We'd love to hear from you! Reach out to discuss your next project or learn more about our services.
          </Paragraph>
          <Button 
            mode="contained" 
            style={styles.contactButton}
            onPress={() => {}}
          >
            Contact Us
          </Button>
        </Surface>
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
  missionSection: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  missionText: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
  },
  valuesContainer: {
    padding: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  valueCard: {
    width: '48%',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  valueTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: 14,
    color: Colors.text,
    textAlign: 'center',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  statCard: {
    width: '48%',
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.text,
  },
  teamTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  teamCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
  },
  teamMemberContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatar: {
    backgroundColor: Colors.primary,
    marginRight: 16,
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
    color: Colors.primary,
    marginBottom: 8,
  },
  memberBio: {
    fontSize: 14,
    color: Colors.text,
    lineHeight: 20,
  },
  contactSection: {
    margin: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
    alignItems: 'center',
    marginBottom: 32,
  },
  contactText: {
    textAlign: 'center',
    marginBottom: 16,
    color: Colors.text,
  },
  contactButton: {
    marginTop: 8,
    backgroundColor: Colors.primary,
  },
});

export default AboutScreen;