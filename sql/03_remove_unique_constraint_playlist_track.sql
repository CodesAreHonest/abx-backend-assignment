CREATE TABLE PlaylistTrack_tmp
(
  PlaylistId INTEGER NOT NULL,
  TrackId INTEGER NOT NULL,

  FOREIGN KEY (PlaylistId) REFERENCES Playlist (PlaylistId),
  FOREIGN KEY (TrackId) REFERENCES Track (TrackId)
);

INSERT INTO PlaylistTrack_tmp (PlaylistId, TrackId)
SELECT PlaylistId, TrackId FROM PlaylistTrack;

drop table PlaylistTrack;

alter table PlaylistTrack_tmp rename to PlaylistTrack;

create index IFK_PlaylistTrackTrackId on PlaylistTrack (TrackId);

create index IFK_PlaylistTrackPlaylistId on PlaylistTrack(PlaylistId);

