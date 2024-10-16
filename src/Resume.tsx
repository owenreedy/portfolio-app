const Resume = () => {
  return (
    <div className="card" style={{ width: '70%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <iframe
        src="/resume.pdf"
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
      <div className="card-body">
        <h5 className="card-title">Owen Reedy's Resume</h5>
        <p className="card-text"></p>
        <a href="#" className="btn btn-primary">
          Download
        </a>
      </div>
    </div>
  );
};

export default Resume;
