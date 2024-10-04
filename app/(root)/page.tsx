import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox ";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "kaung",
    lastName: "sann",
    email: "kaungsan@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={12345}
            totalCurrentBalance={7349634}
          />
        </header>
        Recent Tranctions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 125.55 }, { currentBalance: 500.34 }]}
      />
    </section>
  );
};

export default Home;
