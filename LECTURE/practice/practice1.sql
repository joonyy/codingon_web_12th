-- 1번 : id - varchar(10) age 없애고 interest varchar(100) 추가하기
alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100); 

create table member (
    id varchar(20) not null primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

create table user (
    id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);


-- 2번째
-- user 테이블에 다음의 데이터를 입력하세요(데이터 보냈어요)
INSERT INTO user VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', '', '1986-06-27', 47);
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '1994-06-03', 22);
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1975-11-11', 24);
-- 1. 모든 회원목록을 가져오는데, 이때 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 검색
select * from user order by birthday;
-- 2. 회원 목록 중 gender 컬럼의 값이 "M" 인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬하여 가져오시오.
select * from user where gender='M' order by name desc;
-- 3. 1990 년대에 태어난 회원의 id, name 컬럼을 가져오기
select * from user where birthday like '199_-__-__';
-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬
select * from user where birthday like '____-06-__' order by birthday;
-- 5. gender 컬럼의 값이 'M'이고 1970년대에 태어난 회원 목록
select * from user where gender='M' and birthday like '197_-__-__';
-- 6. 모든 회원목록 중에 age를 기준으로 내림차순 정렬, 처음 3개 값만 가져오기
select * from user order by age desc limit 3;
-- 7. 모든 회원목록 중에 나이가 25 이상 50 이하인 회원의 목록
select * from user where age >= 25 and age <= 50;
-- 8. id 컬럼의 값이 hong1234인 레코드의 pw 컬럼값을 12345678로 변경
update user set pw = '12345678' where id='hong1234';
-- 9. id 컬럼의 값이 jungkrat 인 레코드를 삭제하시오
delete from user where id='jungkrat';








