import React from "react";

function Features() {
  return (
    <section className="container mx-auto px-6 p-10">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Features</h2>
      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Password management</h4>
          <p className="text-gray-600 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className="w-full md:w-1/2">
          <img height="320" width="600" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMBkqLmGoB7b_A8uUyTI25VBHQ-AkZ92KoFA&usqp=CAU" alt="Monitoring" />
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <img height="320" width="600" src="https://cheekymunkey.co.uk/wp-content/uploads/2022/04/Password-blog.jpg" alt="Reporting" />
        </div>
        <div className="w-full md:w-1/2 pl-10">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Password manager</h4>
          <p className="text-gray-600 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>

      <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2">
          <h4 className="text-3xl text-gray-800 font-bold mb-3">Password</h4>
          <p className="text-gray-600 mb-8">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        <div className="w-full md:w-1/2">
          <img height="320" width="600" src="https://2wtech.com/wp-content/uploads/2020/11/pwmanage.png" alt="Syncing" />
        </div>
      </div>
    </section>
  );
}

export default Features;
