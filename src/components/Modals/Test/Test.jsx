import { useState } from "react";

const VideoModal = ({ onSubmit }) => {
  const [week, setWeek] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = () => {
    onSubmit({ week, title, thumbnail });
    setWeek("");
    setTitle("");
    setThumbnail("");
  };

  return (
    <div>
      <button type="button" data-toggle="modal" data-target="#videoModal">
        Open Video Modal
      </button>

      <div
        className="modal fade"
        id="videoModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="videoModalLabel">
                Add Video Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="weekInput">Week:</label>
                <input
                  type="text"
                  className="form-control"
                  id="weekInput"
                  value={week}
                  onChange={(e) => setWeek(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="titleInput">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  id="titleInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="thumbnailInput">Thumbnail URL:</label>
                <input
                  type="text"
                  className="form-control"
                  id="thumbnailInput"
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoUploaderModal = ({ onUpload }) => {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnail, setThumbnail] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);
  };

  const handleThumbnailChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setThumbnail(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    onUpload({ videoFile, thumbnail });
    setVideoFile(null);
    setThumbnail("");
  };

  return (
    <div>
      <button type="button" data-toggle="modal" data-target="#uploaderModal">
        Upload Video
      </button>

      <div
        className="modal fade"
        id="uploaderModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="uploaderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="uploaderModalLabel">
                Upload Video
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="videoFileInput">Video File:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="videoFileInput"
                  onChange={handleFileChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="thumbnailFileInput">Thumbnail Image:</label>
                <input
                  type="file"
                  className="form-control-file"
                  id="thumbnailFileInput"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Upload
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Apps = () => {
  const [videos, setVideos] = useState([]);

  const handleVideoSubmit = (video) => {
    setVideos([...videos, video]);
  };

  const handleVideoUpload = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <div>
      <VideoModal onSubmit={handleVideoSubmit} />
      <VideoUploaderModal onUpload={handleVideoUpload} />

      <h2>Video List</h2>
      {videos.map((video, index) => (
        <div key={index}>
          <p> {video.week}</p>
          <p> {video.title}</p>
          <img src={video.thumbnail} alt="Thumbnail" />
          {video.videoFile && (
            <video controls>
              <source src={URL.createObjectURL(video.videoFile)} />
            </video>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Apps;
