/**
 *
 * @param actor {SWSEActor}
 * @returns {{bab: *}}
 */
export function resolveOffense(actor) {
    actor.data.data.offense = actor.data.data.offense || {}
    let offense = actor.data.data.offense;
    let old = offense.bab;
    let bab = actor.getInheritableAttributesByKey("baseAttackBonus", "SUM", undefined);
    offense.bab = bab;

    let data = {};
    if (old !== offense.bab) {
        data[`data.offense.bab`] = offense.bab;
    }

    if(Object.values(data).length > 0 && !!actor.data._id){
        actor.update(data);
    }
}
