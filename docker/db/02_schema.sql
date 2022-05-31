conn node/oracledb;
show user;

create table ITEM (
    ITEM_ID number not null primary key,
    ITEM_NAME varchar2(50 byte),
    ITEM_CREATED date default sysdate
)
/
create table ITEM_KID (
    ITEM_KID_ID number not null primary key,
    ITEM_KID_NAME varchar2(50 byte),
    ITEM_ID number,
    constraint FK_ITEM foreign key (ITEM_ID) references item(ITEM_ID) on delete cascade
)
/
