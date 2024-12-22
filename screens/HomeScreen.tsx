import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Alert } from "react-native";
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Avatar,
  useTheme,
  Surface,
} from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import Colors from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(71, 117, 234, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const posts = [
    {
      id: 1,
      author: "John Doe",
      avatar: "JD",
      title: "Latest Project Update",
      content:
        "Just finished implementing the new feature set. The results are looking promising!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Jane Smith",
      avatar: "JS",
      title: "Team Collaboration",
      content:
        "Great session with the team today. We've mapped out the next quarter's objectives.",
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      author: "Mike Johnson",
      avatar: "MJ",
      title: "Tech Stack Discussion",
      content:
        "Exploring new technologies for our upcoming project. Thoughts on React Native?",
      timestamp: "1 day ago",
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Home" />
        <Appbar.Action icon="bell" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Surface style={styles.chartCard} elevation={2}>
          <Title style={styles.chartTitle}>Performance Overview</Title>
          <LineChart
            data={data}
            width={300}
            height={200}
            chartConfig={{
              backgroundColor: Colors.background,
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(71, 117, 234, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={styles.chart}
          />
        </Surface>

        <Title style={styles.sectionTitle}>Recent Updates</Title>
        {posts.map((post) => (
          <Card key={post.id} style={styles.postCard}>
            <Card.Content>
              <View style={styles.postHeader}>
                <Avatar.Text size={40} label={post.avatar} />
                <View style={styles.postHeaderText}>
                  <Title style={styles.postTitle}>{post.title}</Title>
                  <Paragraph style={styles.postAuthor}>
                    {post.author} • {post.timestamp}
                  </Paragraph>
                </View>
              </View>
              <Paragraph style={styles.postContent}>{post.content}</Paragraph>
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
  chartCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
    backgroundColor: Colors.background,
    margin: 10,
  },
  chartTitle: {
    fontSize: 20,
    marginBottom: 16,
    fontWeight: "bold",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    marginLeft: 15,
  },
  postCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: Colors.background,
    margin: 15,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  postHeaderText: {
    marginLeft: 12,
    flex: 1,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  postAuthor: {
    fontSize: 14,
    color: Colors.text,
  },
  postContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;
