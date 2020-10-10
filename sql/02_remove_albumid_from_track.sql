CREATE TABLE Track_dg_tmp
(
  TrackId INTEGER not null,
  Name NVARCHAR(200) not null,
  MediaTypeId INTEGER not null,
  GenreId INTEGER not null,
  Composer NVARCHAR(220),
  Milliseconds INTEGER not null,
  Bytes INTEGER,
  UnitPrice NUMERIC(10,2) not null,

  PRIMARY KEY(TrackId),
  FOREIGN KEY (MediaTypeId) REFERENCES MediaType (MediaTypeId),
  FOREIGN KEY (GenreId) REFERENCES Genre (GenreId)
);

insert into Track_dg_tmp(TrackId, Name, MediaTypeId, GenreId, Composer, Milliseconds, Bytes, UnitPrice)
select TrackId, Name, MediaTypeId, GenreId, Composer, Milliseconds, Bytes, UnitPrice from Track;

drop table Track;

alter table Track_dg_tmp rename to Track;

create index IFK_TrackGenreId
  on Track (GenreId);

create index IFK_TrackMediaTypeId
  on Track (MediaTypeId);

create unique index IPK_Track
  on Track (TrackId);

