import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import Card from "../components/Card";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Card />
      <JobListings />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
