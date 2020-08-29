export default (req, res) => {
  const data = {
    data: [
      {
        profile: "alak",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fwill-truettner-g5qWYuTKkok-unsplash.jpg?alt=media&token=51ddf24d-2f82-48c1-9a33-bc005b5be19c",
      },
      {
        profile: "koyena",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fvinay-tadepalli-yMDzez6Oy3c-unsplash.jpg?alt=media&token=c9d4d2d9-91fd-4364-93b2-8ca6b751e39d",
      },
      {
        profile: "sweta",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Ftolga-ahmetler-ifrtTw459Dw-unsplash.jpg?alt=media&token=fd1fa80b-efe4-433b-ab47-e6799d9fd973",
      },
      {
        profile: "aish",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fsiim-lukka-WDharr56x18-unsplash.jpg?alt=media&token=d40be48d-06b3-47ef-a3d2-eff72beeadac",
      },
      {
        profile: "akshith",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fscreen-post-3xYMwWCG90I-unsplash.jpg?alt=media&token=31ef1756-968b-4e64-8370-7a97f1f43b71",
      },
      {
        profile: "tanu",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Froan-lavery-LEhdq71XZy0-unsplash.jpg?alt=media&token=8e077efa-7e6a-4202-84a1-5e672a191e93",
      },
      {
        profile: "raj",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fpavel-nekoranec--8CDNg5mH-M-unsplash.jpg?alt=media&token=f7111a7f-d0eb-4db4-b81e-c8886d42efbb",
      },
      {
        profile: "shiva",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fjosh-hild-nmfRdImWlK4-unsplash.jpg?alt=media&token=d08b831c-eb06-4bac-8122-ada8149868e1",
      },
      {
        profile: "ayush",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fdonovan-valdivia-AB7TcT_GVU0-unsplash.jpg?alt=media&token=218db429-d848-46ea-bdff-1bc4456fd108",
      },
      {
        profile: "shubham",
        url:
          "https://firebasestorage.googleapis.com/v0/b/ig-dashboard-7d6d4.appspot.com/o/stories%2Fdeborah-cortelazzi-gREquCUXQLI-unsplash.jpg?alt=media&token=a49ba56f-0f97-4928-b7d1-1e1d3ba8231f",
      },
    ],
  };
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send(data);
  // res.end(JSON.stringify({ name: "John Doe" }));
};
