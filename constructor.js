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
function Skillset(S1, S2, S3, S4, S5, S6, S7, S8, S9, S10, S11, S12, S13, S14, S15, S16, name){
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
    this.name = name;
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

const 타오르는_투지 = new Skill("타오르는 투지", null, null, null, null);
타오르는_투지.Desc = '적을 처치할 시 1의 행동력을 얻습니다.';

const 약점_노리기 = new Skill("약점 노리기", 12, 18, null, null);

const 가드_브레이크 = new Skill("가드 브레이크", null, null, null, null);
가드_브레이크.Desc = '상대의 방어도와 철갑을 완전히 파괴할 시 1의 무방비와 2의 무기력을 같이 부여합니다.';

const 카운터_디펜스 = new Skill("카운터 디펜스", null, null, 10, 18);

const 침착한_대응 = new Skill("침착한 대응", null, null, null, null);
침착한_대응.Desc = '자신의 방어도와 철갑이 모두 파괴되면 1의 방어력을 얻습니다.';

const 전력_방어 = new Skill("전력 방어", null, null, null, 50);

const 데들리_스트라이크 = new Skill("데들리 스트라이크", 48, 56, null, null);

const 전투_회복 = new Skill("전투 회복", null, null, null, null);
전투_회복.Desc = '전투 종료 시 최대 체력의 12%만큼의 생명력을 회복합니다.';

const 악식 = new Skill("악식", 10, 14, null, null);

const 생존_기술 = new Skill("생존 기술", null, null, null, null);
생존_기술.Desc = '전투 시작 시 1의 면역을 얻으며, 영구적으로 1의 공격력과 10의 최대 생명력을 얻습니다.';

const 포식 = new Skill("포식", 12, 16, null, null);

const 공격 = new Skill("공격", 11, 13, null, null);

const 더블_슬래시 = new Skill("더블 슬래시", 10, 16, null, null);

const 방어 = new Skill("방어", null, null, null, 8);


/** 나이트 스킬 */

const 포인트_가드 = new Skill("포인트 가드", null, null, null, 30);

const 의지_단결 = new Skill("의지 단결", null, null, null, 15);

const 수비_진형 = new Skill("수비 진형", null, null, null, null);
수비_진형.Desc = '모든 아군 유닛이 동료 유닛의 수만큼 방어력을 얻습니다.';

const 티탄즈_배리어 = new Skill("티탄즈 배리어", null, null, null, null);
티탄즈_배리어.Desc = '80의 수호를 소모하여 모든 아군 유닛에게 1의 보호를 부여합니다.';

const 전진_방어 = new Skill("전진 방어", null, null, null, 36);

const 위기_극복 = new Skill("위기 극복", null, null, null, null);
위기_극복.Desc = '전투 시작 시 20의 수호를 얻으며, 자신의 방어도와 철갑이 모두 상실될 경우 20의 수호를 얻습니다.';

const 명예로운_결투 = new Skill("명예로운_결투", null, null, null, null);
명예로운_결투.Desc = '단일 적 유닛을 전방으로 끌어오며, 서로에게 2의 결투와 이동 불가를 부여합니다. 결투가 부여된 유닛이 존재할 경우 사용할 수 없습니다.';

const 타워_실드 = new Skill("타워 실드", null, null, null, null);
타워_실드.Desc = '자신의 턴 시작 시 최대 생명력의 10%만큼의 방어도를 얻습니다.';

const 실드_태클 = new Skill("실드 태클", 20, 30, null, null);

const 방패술_훈련 = new Skill("방패술 훈련", null, null, null, null);
방패술_훈련.Desc = '턴 종료시 경감되는 수호의 30%만큼의 반격과 1의 도발을 얻습니다.';

/** 랜서 스킬 */

let distance = 0;

const 트리플_스탭 = new Skill("트리플 스탭", 5, 9, null, null);

const 깊이_찌르기 = new Skill("깊이 찌르기", 16, 24, null, null);

const 준비_만전 = new Skill("준비 만전", null, null, null, null);
준비_만전.Desc = '전투 시작 시 3의 연참을 얻습니다.';

const 사우전드_드롭스 = new Skill("사우전드 드롭스", 16, 24, null, null);

const 전진_찌르기 = new Skill("전진 찌르기", 10, 14, null, 10);

const 정면돌파 = new Skill("정면돌파", null, null, null, null);
정면돌파.Desc = "전방으로 이동할 시 1의 강화를 얻습니다.";

const 투창 = new Skill("투창", 6 + distance * 6, 8 + distance * 6, null, null);

const 아크로바틱 = new Skill("아크로바틱", null, null, null, 10);

const 회전_방어 = new Skill("회전 방어", null, null, null, 8 + AdditionalDamage);

const 발경 = new Skill("발경", 12, 18, null, null);

const 약점_강타 = new Skill("약점 강타", null, null, null, null);
약점_강타.Desc = '치명타 발생 시 대상에게 1의 기절을 부여합니다.';

const 혼신의_일격 = new Skill("혼신의 일격", 16 + additionalDamage * 5, 28 + additionalDamage * 5, null, null);

const 경계_태세 = new Skill("경계 태세", null, null, 10 + additionalDamage, 20);

const 급소_찌르기 = new Skill("급소 찌르기", 16, 24, null, null);

const 방세_전환 = new Skill("방세 전환", null, null, null, 50);

// 아크나이트

// 스킬 수치 변경
function skillsetting(input) {
    // if (input == "AdditionalDamage" || input == "AttackPoint") {}
    // 공격력, 방어력 등 바뀌면 본문, 수치 재적용

        // 워리어
        횡베기.Desc = `적 전체에게 ${횡베기.mindmg} ~ ${횡베기.maxdmg}의 피해를 입힙니다.`;
        약점_노리기.Desc = `단일 적 대상에게 ${약점_노리기.mindmg} ~ ${약점_노리기.maxdmg}의 피해를 입히고 2의 출혈을 부여합니다.`;
        카운터_디펜스.Desc = `스스로에게 ${카운터_디펜스.defence}의 방어도와 ${카운터_디펜스.counter}의 반격을 부여합니다.`;
        전력_방어.Desc = `1의 공격력과 ${전력_방어.defence}의 방어도를 얻고 1의 방어력을 잃습니다.`;
        데들리_스트라이크.Desc = `맨 앞에 있는 대상에게 ${데들리_스트라이크.mindmg} ~ ${데들리_스트라이크.maxdmg}의 피해를 입힙니다. 이 스킬로 적을 처치할 시 1의 행동력을 돌려받습니다.`;
        악식.Desc = `단일 적 대상에게 ${악식.mindmg} ~ ${악식.maxdmg}의 피해를 입힙니다. 이 스킬로 적을 처치할 시 15의 생명력을 회복합니다.`;
        포식.Desc = `단일 적 대상에게 ${포식.mindmg} ~ ${포식.maxdmg}의 피해를 입힙니다. 이 스킬로 적을 처치할 경우 1의 sp를 얻습니다.`;
        공격.Desc = `단일 적 대상에게 ${공격.mindmg} ~ ${공격.maxdmg}의 피해를 입힙니다.`;
        더블_슬래시.Desc = `단일 적 대상에게 ${더블_슬래시.mindmg} ~ ${더블_슬래시.maxdmg}의 피해를 두 번 입힙니다.`;
        방어.Desc = `스스로 ${방어.defence}의 방어도를 얻습니다.`;

        // 나이트

        // 랜서
        트리플_스탭.Desc = `단일 적 대상에게 ${트리플_스탭.mindmg} ~ ${트리플_스탭.maxdmg}의 피해를 세 번 입힙니다. 더블 슬래시를 대체합니다.`;
        깊이_찌르기.Desc = `단일 적 대상에게 ${깊이_찌르기.mindmg} ~ ${깊이_찌르기.maxdmg}의 피해를 입히며, 바로 뒤 대상에게도 같은 피해를 입힙니다.`;
        사우전드_드롭스.Desc = `적 전체에게 ${사우전드_드롭스.mindmg} ~ ${사우전드_드롭스.maxdmg}의 피해를 3번 입힙니다. 한 전투 당 한 번만 사용할 수 있습니다.`;
        전진_찌르기.Desc = `앞으로 한 칸 이동한 후 단일 적 대상에게 ${전진_찌르기.mindmg} ~ ${전진_찌르기.maxdmg}의 피해를 입히며, 스스로 ${전진_찌르기.defence}의 방어도를 얻습니다.`;
        투창.Desc = `뒤로 한 칸 이동하며 단일 적 대상에게 ${투창.mindmg} ~ ${투창.maxdmg}의 피해를 입힙니다.`;
        아크로바틱.Desc = `자신의 턴에 이동할 때마다 ${아크로바틱.defence}의 방어도를 얻습니다.`;
        회전_방어.Desc = `스스로 ${회전_방어.defence}의 방어도를 얻습니다.`;
        발경.Desc = `맨 앞의 적에게 ${발경.mindmg} ~ ${발경.maxdmg}의 피해를 입힙니다. 반드시 치명타가 발생합니다.`;
        혼신의_일격.Desc = `앞으로 한 칸 이동한 후 단일 적 대상에게 ${혼신의_일격.mindmg} ~ ${혼신의_일격.maxdmg}의 피해를 입힙니다.`;
        경계_태세.Desc = `스스로 ${경계_태세.defence}의 방어도와 ${경계_태세.counter}의 반격을 얻습니다.`;
        급소_찌르기.Desc = `단일 적 대상에게 ${급소_찌르기.mindmg} ~ ${급소_찌르기.maxdmg}의 피해와 2의 심한 출혈을 부여합니다.`;
        방세_전환.Desc = `스스로에게 2의 공격력과 ${방세_전환.defence}의 방어도를 부여하고 1의 방어도를 잃습니다.`;

        // 아크나이트

}


const warrior = new Skillset(횡베기, 타오르는_투지, 약점_노리기, 가드_브레이크, 카운터_디펜스, 침착한_대응, 전력_방어, 데들리_스트라이크, 전투_회복, 악식, 생존_기술, 포식, 공격, 더블_슬래시, 방어, null, 'warrior');
// const knight = new Skillset(, , , , , , , , , , , , , , , , 'knight');
const lancer = new Skillset(트리플_스탭, 깊이_찌르기, 준비_만전, 사우전드_드롭스, 전진_찌르기, 정면돌파, 투창, 아크로바틱, 회전_방어, 발경, 약점_강타, 혼신의_일격, 경계_태세, 급소_찌르기, 방세_전환, null, 'lancer');


const Scarlet = new Char(warrior, /*knight*/ null, lancer, null /*paladin*/, null /*arcknight*/, null /*berserker*/, null /*reaper*/ );
// const Jade = new Char('mage', 'sorcerer', 'magister', 'arcmage', 'druid', 'warlock', 'summoner');
// const Iris = new Char('ranger', null, null, null, null, null, null);
