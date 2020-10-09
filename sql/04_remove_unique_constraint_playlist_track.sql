CREATE TABLE PlaylistTrack_tmp (
  PlaylistId INTEGER NOT NULL,
  TrackId INTEGER NOT NULL,

  PRIMARY KEY(PlaylistId, TrackId),
  FOREIGN KEY (PlaylistId) REFERENCES Playlist (PlaylistId),
  FOREIGN KEY (TrackId) REFERENCES Track (TrackId)
);

INSERT INTO PlaylistTrack_tmp(PlaylistId, TrackId)
SELECT PlaylistId, TrackId FROM PlaylistTrack;

DROP TABLE PlaylistTrack;

ALTER TABLE PlaylistTrack_tmp RENAME TO PlaylistTrack;

CREATE INDEX IFK_PlaylistTrackTrackId on PlaylistTrack (TrackId);
CREATE INDEX IFK_PlaylistPlaylistId on PlaylistTrack (PlaylistId);