/* 세부 스킬 설정 >> 직업별 스킬 설정 >> 캐릭별 직업군 설정 */

/**
 * 캐릭별 직업군 설정
 * @param {*} FC FirstClass, 처음 시작 시 직업
 * @param {*} CC1 ChangedClass, 1차전직 1
 * @param {*} CC2 ChangedClass2, 1차전직 2
 * @param {*} LC1 LastClass, 2차전직 1
 * @param {*} LC2 LastClass2, 2차전직 2
 * @param {*} LC3 LastClass3, 2차전직 3
 * @param {*} LC4 LastClass4, 2차전직 4
 */
function Char(FC, CC1, CC2, LC1, LC2, LC3, LC4){
    this.FC = FC;
    this.CC1 = CC1;
    this.CC2 = CC2;
    this.LC1 = LC1;
    this.LC2 = LC2;
    this.LC3 = LC3;
    this.LC4 = LC4;
}

/**
 * 직업별 스킬 설정.
 */
function Skillset(S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16){
    this.S1 = S1;
    this.S2 = S2;
    this.S3 = S3;
    this.S4 = S4;
    this.S5 = S5;
    this.S6 = S6;
    this.S7 = S7;
    this.S8 = S8;
    this.S9 = S9;
    this.S10 = S10;
    this.S11 = S11;
    this.S12 = S12;
    this.S13 = S13;
    this.S14 = S14;
    this.S15 = S15;
    this.S16 = S16;
}
/**
 * 세부 스킬 설정
 * @param {*} SkillName 
 * @param {*} SkillDesc 
 * @param {*} maxdmg 
 * @param {*} mindmg 
 * @param {*} counter 
 * @param {*} defence 
 */
function Skill(SkillName, mindmg, maxdmg, counter, defence, cost){
    this.Name = Name;
    this.mindmg = mindmg;
    this.maxdmg = maxdmg;
    this.counter = counter;
    this.defence = defence;
}

/**
 * 워리어 스킬
 */

const 횡베기 = new Skill("횡베기", 6, 10, null, null);
횡베기.Desc = `적 전체에게 ${횡베기.mindmg} ~ ${횡베기.maxdmg}만큼의 피해를 입힙니다.`;

const 타오르는_투지 = new Skill("타오르는 투지", null, null, null, null);
타오르는_투지.Desc = '적을 처치할 시 1의 행동력을 얻습니다.';

const 약점_노리기 = new Skill("약점 노리기", 12, 18, null, null);
약점_노리기.Desc = `단일 적 대상에게 ${약점_노리기.mindmg} ~ ${약점_노리기.maxdmg}의 피해를 입히고 2의 출혈을 부여합니다.`;

const 가드_브레이크 = new Skill("가드 브레이크", null, null, null, null);
가드_브레이크.Desc = '상대의 방어도와 철갑을 완전히 파괴할 시 1의 무방비와 2의 무기력을 같이 부여합니다.';

const 카운터_디펜스 = new Skill("카운터 디펜스", null, null, 10, 18);
카운터_디펜스.Desc = `스스로에게 ${카운터_디펜스.defence}의 방어도와 ${카운터_디펜스.counter}의 반격을 부여합니다.`;

const 침착한_대응 = new Skill("침착한 대응", null, null, null, null);
침착한_대응.Desc = '자신의 방어도와 철갑이 모두 파괴되면 1의 방어력을 얻습니다.';

const 전력_방어 = new Skill("전력 방어", null, null, null, 50);
전력_방어.Desc = `1의 공격력과 ${전력_방어.defence}의 방어도를 얻고 1의 방어력을 잃습니다.`;

const 데들리_스트라이크 = new Skill("데들리 스트라이크", 48, 56, null, null);
데들리_스트라이크.Desc = `맨 앞에 있는 대상에게 ${데들리_스트라이크.mindmg} ~ ${데들리_스트라이크.maxdmg}의 피해를 입힙니다. 이 스킬로 적을 처치할 시 1의 행동력을 돌려받습니다.`;

const 전투_회복 = new Skill("전투 회복", null, null, null, null);
전투_회복.Desc = '전투 종료 시 최대 체력의 12%만큼의 생명력을 회복합니다.';
/** 나이트 스킬 */


const Scarlet = new Char()
