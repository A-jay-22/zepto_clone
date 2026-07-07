// import React from "react";

const Notice = () => {
  return (
    <div className="min-h-screen bg-[#2B014A] text-white">
      {/* Header */}
      <div className="bg-[#4A0A6B] py-6">
        <h1 className="text-4xl font-bold text-center underline">
          Privacy Notice
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold mb-4">Version 1.1</h2>

        <h3 className="text-2xl font-semibold mb-8">
          Last updated: 17th June 2025
        </h3>

        <p className="text-lg leading-9 mb-8">
          This Notice applies to Zepto Marketplace Private Limited (hereinafter
          referred to as <b>"Zepto"</b> or <b>"the Company"</b>), a company
          incorporated under the Companies Act, 2013 and having its registered
          office at First Floor, 773, Sarjapur Main Road, Kaikondarahalli,
          Bengaluru, Karnataka-560103 and its subsidiaries, holding company and
          affiliates. The Company is the owner of websites
          <a href="https://www.zeptonow.com" className="underline mx-1">
            www.zeptonow.com
          </a>
          ,
          <a href="https://www.zepto.com" className="underline mx-1">
            www.zepto.com
          </a>
          and the mobile application <b>"Zepto"</b> (collectively, the
          "Platform").
        </p>

        <p className="text-lg leading-9 mb-8">
          This Privacy Notice describes the policies and procedures applicable
          to the collection, use, storage, disclosure and protection of your
          information shared with us while you use the Platform. We value the
          trust you place in us and maintain reasonable security standards to
          protect your personal information.
        </p>

        <p className="text-lg leading-9 mb-8">
          Please read this Privacy Notice carefully before using or registering
          on the Platform or accessing any services offered through it.
        </p>

        <p className="text-lg leading-9 mb-8">
          This Privacy Notice explains how your information is collected,
          received, stored, processed, transferred and handled by us. It does
          not apply to information collected by third-party websites or services
          that you access through the Platform.
        </p>

        <p className="text-lg leading-9">
          By visiting the Platform or creating an account, you agree to the
          terms of this Privacy Notice and consent to our collection, storage,
          processing and sharing of your personal information in accordance with
          this Privacy Notice.
        </p>
      </div>
    </div>
  );
};

export default Notice;
